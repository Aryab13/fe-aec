import { useNavigate } from "react-router-dom";

function ForgotPass() {

    const navigate = useNavigate();

    const BASE_API = "https://652ff3566c756603295dfc8e.mockapi.io";

    const fetcher = async ({ endpoint = "", config = {} }) => {
        let result = {
          data: [],
          error: {},
        };
      
        try {
          const response = await fetch(`${BASE_API}/${endpoint}`, config);
          const data = await response.json();
      
          console.log(data, "data");
      
          result.data = data;
        } catch (error) {
          result.error = error;
        }
      
        return result;
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const inputEmail = document.getElementById("email").value;
        const inputPassword = document.getElementById("password").value;
      
        const { data } = await fetcher({
          endpoint: "user",
        });
      
        const isUserExist = data?.find(
          (item) => item.email === inputEmail
        );
      
        if (!isUserExist) return alert("Email not Registered");
      
        fetcher({
            endpoint: "user",
            config: {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: inputEmail,
                password: inputPassword,
              }),
            },
          });
        
        alert("Reset Password Successful");
        navigate("/login");
      };
    
    const togglePassword = () => {
        var passwordInput = document.getElementById('password');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit} class="max-w-sm mx-auto mt-36">
                <h1 className='text-center text-3xl font-bold pb-6'>Reset Password</h1>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-base font-medium">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email..." required/>
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-base font-medium">Reset password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password..." required/>
                </div>
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                    <input  onClick={togglePassword} id="show" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <label for="show" class="ms-2 text-sm font-medium">Show Password</label>
                </div>
                <button type="submit" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </form>
    </>
  )
}

export default ForgotPass