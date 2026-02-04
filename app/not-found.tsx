import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, FileQuestion } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 relative overflow-hidden">
            <div className="max-w-2xl w-full text-center relative z-10">
                {/* Animated 404 */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    </div>
                    <div className="relative">
                        <h1
                            className="font-black leading-none tracking-tighter"
                            style={{
                                fontSize: "clamp(100px, 20vw, 200px)",
                                background:
                                    "linear-gradient(to right, rgb(37, 99, 235), rgb(79, 70, 229), rgb(147, 51, 234))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            404
                        </h1>
                    </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                        <div className="relative bg-white dark:bg-gray-800 p-6 rounded-full shadow-xl border border-gray-200 dark:border-gray-700">
                            <FileQuestion className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for seems to have wandered off
                    into the digital void.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                            style={{
                                background:
                                    "linear-gradient(to right, rgb(37, 99, 235), rgb(79, 70, 229))",
                            }}
                        >
                            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-900 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div
                className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
            ></div>
        </div>
    );
}
