
export default function ContactForm() {

    return (

        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Contact Me ✉️
            </h1>
            <form className="w-full max-w-lg mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="w-full p-2">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="border border-gray-400 p-2 rounded-lg w-full"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="w-full p-2">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border border-gray-400 p-2 rounded-lg w-full"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="w-full p-2">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="border border-gray-400 p-2 rounded-lg w-full"
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Your message"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className='flex justify-center items-center mx-auto p-6'>
                    {/* create gradient button using tailwind */}

                    <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-2 rounded-lg hover:from-blue-500 hover:to-blue-600" >
                        Send
                    </button>
                    {/* <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600" >
                        Send
                    </button> */}
                </div>
            </form>
        </div>

    )
}
