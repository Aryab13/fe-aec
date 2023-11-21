function Footer() {
    return (
        <>
        <footer class="bg-white shadow dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <h1 className="text-xl font-bold text-white">AgroEduConnect</h1>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Live Session</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Articles</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Community</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 AggroEduConnect. All Rights Reserved.</span>
            </div>
        </footer>
        </>
    )
}

export default Footer