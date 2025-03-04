import React from "react";  

const Blog = () => {
  const blogs = [
    {id:1, title: "Elisa Jack, M.D is a highly compassionate physician.", image: "src/assets/doctor1.png"},
    {id:2, title: "Dr. Dias had demonstrated an aptitude for providing complete.", image: "src/assets/doctor2.png"},
    {id:3, title: "Dr. Vector is a competent, energetic and highly dedicated physician.", image: "src/assets/doctor3.png"},
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
      <div className="text-center md:w-1/2 mx-auto">
      <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Meet our awesome Doctors</h2>
            <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">Our ability to deliver outstanding results for our clients starts with our team of experts.​</p>
      </div>

      {/* all blogs*/}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {
          blogs.map( blog => <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={blog.image} alt="" width={350} className="hover:scale-95 transition-all duration-300" />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
              <div className="flex items-center justify-center gap-8">
                  <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Readmore</a>

                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Blog;

