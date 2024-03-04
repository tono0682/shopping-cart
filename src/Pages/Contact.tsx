
const ContactPage = () => {
  return (
    <div className="h-full w-full flex justify-center">

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-x-8 gap-y-4 bg-white p-10 rounded-xl w-full max-w-[850px]">
        <h1 className="col-span-1 sm:col-span-2 text-4xl font-bold text-primary">Contact Us!</h1>
        <section className="flex justify-center">
          <img src="/public/contact-image.png" alt="" className="max-h-[150px] sm:max-h-[400px]"/>
        </section>
        <section>
          <form className="flex flex-col gap-2">
            <fieldset>
              <label htmlFor="fullname">Full Name</label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Full Name"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="message">Message</label>
              <textarea 
                className="shadow appearance-none border rounded w-full h-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" id="message" placeholder="Message"
                />
            </fieldset>
            <button type="submit" className="mt-5 bg-primary hover:bg-primaryLight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> Contact Us</button>

          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;