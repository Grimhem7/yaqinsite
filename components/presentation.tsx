interface Presentation {
  
}

export default function Presentation() {
   
    return (
        <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-4 sm:px-6 md:px-8 xl:grid-cols-1 bg-slate-900 rounded-[40px] text-center p-[18px]">
          <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl my-4 pt-[-10px]">
            Who is Yassine Fallahi?
            <br />
            <span className="broken leading-[1.6] font-bold sm:text-[2.75rem]"></span>
          </h2>
          <div className="h-[2px] w-44 bg-gradient-to-r from-blue-600 to-indigo-400 mx-auto my-5"></div>
          <div className="relative flex h-auto w-full flex-col items-center justify-center">
            <img
              className="aspect-square rounded-3xl object-cover"
              src="images/New Project.png"
              width="350"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start justify-start">
      <div className="text-left w-full">
        <p className="mt-6 tracking-normal text-justify text-gray-300 cairo-presentation">
          <b>
            I am Yassine Fallahi, a 30-year-old entrepreneur who has built a unique and profitable journey in the world of online business.
            My story began in high school, when I realized that the traditional path wasn’t for me. That’s when I discovered the limitless opportunities of digital entrepreneurship.

            By the age of thirty, I had created an online store that generated over €3 million in sales. Building on that success, I founded YAQINE and launched the Students Master Program, a system designed to help online sellers thrive in the European market.

            The Program is not just another course it’s a complete revolution. It combines powerful logistics solutions, advanced digital tools, and hidden strategies within the fast-growing world of e-learning.

            Through this program, young entrepreneurs can make a real impact while building highly profitable online businesses.
            YAQINE is the ideal platform for ambitious minds who want to break free from old, outdated methods and take their e-commerce journey to the next level.

            Join me and more than 240 entrepreneurs who are shaping the future of e-commerce commerce in Europe.
          </b>
        </p>
      </div>
    </div>
        </div>
    );
  }





