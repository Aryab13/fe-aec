function Register () {
    return (
        <>
            <form class="max-w-sm mx-auto mt-24">
                <h1 className='text-center text-3xl font-bold pb-6'>Register</h1>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-base font-medium">Your Name</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name..." required/>
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-base font-medium">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email..." required/>
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-base font-medium">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password..." required/>
                </div>
                <button type="submit" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register new Account</button>
                <p className="text-right pt-4">Already have an account? <a href="#" className="text-green-600 hover:underline">Login</a></p>
            </form>
        </>
    )
}

export default Register