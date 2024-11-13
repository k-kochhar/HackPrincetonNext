'use client'

import React, {useState, useEffect, useRef} from 'react'
import {Dialog, DialogBackdrop, DialogPanel, TransitionChild} from '@headlessui/react'
import {
    Bars3Icon, CalendarIcon, ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon, XMarkIcon,
} from '@heroicons/react/24/outline'
import Header from '../components/lecture/Header'
import PlayButton from '../components/lecture/Playbutton'
import PauseButton from '../components/lecture/PauseButton'


export default function Lecture() {

    const [isRecording, setIsRecording] = useState(false)
    const [finalTranscript, setFinalTranscript] = useState('')
    const [interimTranscript, setInterimTranscript] = useState('')
    const recognitionRef = useRef(null)
    const lastSpeechTimeRef = useRef(Date.now())
    const silenceTimeoutRef = useRef(null)
    const [question, setQuestion] = useState('')
    const [messages, setMessages] = useState([])
    const address = 'http://172.20.10.3:5000'

    useEffect(() => {
        if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
            const {webkitSpeechRecognition} = window;
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event) => {
                // Update the last speech time
                lastSpeechTimeRef.current = Date.now();

                // Clear any existing silence timeout
                if (silenceTimeoutRef.current) {
                    clearTimeout(silenceTimeoutRef.current);
                }

                // Get the current result
                const result = event.results[event.results.length - 1];

                if (result.isFinal) {
                    // If it's a final result, update the final transcript
                    let updatedTranscript = capitalizeFirstLetter(result[0].transcript + ". ");
                    setFinalTranscript(prevTranscript => {
                        // Ensure the entire transcript is properly formatted
                        return capitalizeFirstLetter(prevTranscript + updatedTranscript);
                    });
                    setInterimTranscript('');
                    console.log('Most Recent Chunk:', result[0].transcript.trim() + ".");
                    postChunk(result[0].transcript.trim() + ".");
                } else {
                    // If it's an interim result, show it while keeping the final transcript
                    setInterimTranscript(result[0].transcript);
                }

                // Set up silence detection
                silenceTimeoutRef.current = setTimeout(() => {
                    if (Date.now() - lastSpeechTimeRef.current >= 1000) {
                        // Only clear the interim transcript after silence
                        setInterimTranscript('');
                    }
                }, 1000);
            };

            recognition.onend = () => {
                if (isRecording) {
                    recognition.start();
                }
            };

            recognition.onerror = (event) => {
                console.log('Speech recognition error:', event.error);
                if (event.error === 'no-speech' && isRecording) {
                    setInterimTranscript('');
                    recognition.stop();
                    recognition.start();
                }
            };

            recognitionRef.current = recognition;
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
            if (silenceTimeoutRef.current) {
                clearTimeout(silenceTimeoutRef.current);
            }
        };
    }, [isRecording]);

    const startRecording = () => {
        if (recognitionRef.current && !isRecording) {
            lastSpeechTimeRef.current = Date.now();
            setFinalTranscript('');
            setInterimTranscript('');
            recognitionRef.current.start();
            setIsRecording(true);
        }
    };

    function capitalizeFirstLetter(text) {
        return text.replace(/(?:^|\.\s*)([a-z])/g, (match, firstLetter) => {
            return match.replace(firstLetter, firstLetter.toUpperCase());
        });
    }

    const stopRecording = () => {
        if (recognitionRef.current && isRecording) {
            recognitionRef.current.stop();
            setIsRecording(false);
            setInterimTranscript('');
            if (silenceTimeoutRef.current) {
                clearTimeout(silenceTimeoutRef.current);
            }
        }
    };


    const postChunk = async (chunk) => {
        try {
            console.log("Attemping to send chunk, ")
            const response = await fetch("http://172.20.10.3:5000/api/v1/add_lecture", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "course_title": "Presentation Uno",
                    "lecture_title": "Lecture 1",
                    "content": chunk
                }),
            });

            if (response.ok) {
                console.log("Call Sent!");
            }
        } catch (error) {
            console.log("Error")
        }
    };


    const postQuestion = async () => {

        // Add the question to the list of messages
        setMessages([...messages, {
            text: question,
            isUser: true,
        }]);

        try {
            const response = await fetch("http://172.20.10.3:5000/api/v1/query", {
                method: "POST", headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    "question": question,
                    "course_title": "Presentation Uno",
                    "lecture_title": "Lecture 1",
                    "prefer_recent": true,
                    "limit": 10
                }),
            });

            // Add the response to the list of messages
            if (response.ok) {
                const data = await response.json(); // Parse the response JSON
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: data.answer, isUser: false }, // Use the parsed data here
                ]);
                console.log("Call Sent!");
            } else {
                console.error("Failed to get a response");
            }
        } catch (error) {
            console.log("Error")
        }

    }

    return (

        <div className="flex flex-col h-screen overflow-hidden">
            <Header/>
            <main className="flex flex-1">
                {/* Left Side */}
                <div className="w-3/5 pl-10">
                    <div className="px-4 py-6 h-full">
                        <h2 className="text-[#69BBCF] text-3xl font-bold mb-6">Record your Lecture</h2>

                        <div className="p-4 border border-neutral-300 rounded-3xl h-[80%] overflow-hidden">
                            <div className="bg-white overflow-y-auto">

                                <div
                                    className="w-full min-h-[200px] max-h-[400px] overflow-y-auto p-4">
                                    {finalTranscript && (<div className="text-gray-900 mb-2">{finalTranscript}</div>)}
                                    {interimTranscript && (<div className="text-gray-500">{interimTranscript}</div>)}
                                    {!finalTranscript && !interimTranscript && 'Transcript will appear here...'}
                                </div>

                            </div>
                        </div>

                        <div className="grid grid-cols-6 mt-5 ">

                            {/* Text Input Area */}
                            <div className="p-6 border-neutral-300 rounded-3xl  col-span-5  overflow-hidden">
                                <div className="bg-white">

                                </div>
                            </div>

                            <div className="flex col-span-1 justify-end">
                                {!isRecording ? (<button
                                    onClick={startRecording}
                                    disabled={isRecording}
                                >
                                    <PlayButton/>
                                </button>) : (<button
                                    onClick={stopRecording}
                                    disabled={!isRecording}
                                >
                                    <PauseButton/>
                                </button>)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-2/5 pr-10">
                    <div className="px-4 py-6 h-full">

                        <h3 className="text-[#69BBCF] text-3xl font-bold mb-6">Ask</h3>

                        <div className="p-4 border border-neutral-300 rounded-3xl h-[80%] overflow-hidden">
                            {/* This is where the Chat will be */}
                            <div className="bg-white overflow-y-auto h-full p-4 space-y-2">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex p-2 rounded-lg ${msg.isUser ? 'bg-blue-200 justify-end pr-6' : 'bg-green-200 justify-start pl-6'} text-neutral-600`}>
                                        {msg.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-6">
                            {/* Text Input Area */}
                                 <textarea
                                     className="text-neutral-600 w-full p-3 bg-white mt-5 border border-neutral-300 rounded-3xl col-span-5 overflow-hidden"
                                     placeholder="Ask a Question!"
                                     value={question}
                                     onChange={(e) => setQuestion(e.target.value)}
                                 >
                                </textarea>
                                <div className="flex col-span-1 justify-end">
                                    <button
                                        onClick={postQuestion}
                                        disabled={!question}
                                    >
                                        <img
                                            loading="lazy"
                                            src="/Upload.png"
                                            alt="Upload"
                                            className="object-contain pt-8 shrink-0 rounded-none aspect-[1.07] w-[100px]"
                                        />
                                    </button>

                                </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>)
}
