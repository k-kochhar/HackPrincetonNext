export const metadata = {
    title: "Go",
    description: "Time to Go",
};

export default function RootLayout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            <main className="h-full">{children}</main>
        </div>
    );
}
