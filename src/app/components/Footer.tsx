 import { Film, Mail, Phone } from "lucide-react";

 
export const Footer = () => {
  return (
    <div className="w-[100%] bg-[#4338CA] py-10 px-5 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <div className="flex flex-col gap-3 col-[1/2]" id="title">
        <p className="flex gap-2 italic font-bold text-[16px]">
          <Film />
          <span>Movie Z</span>
        </p>
        <p className="text-sm">© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-3" id="contactInformation">
          <h2>Contact information</h2>
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center" id="mail">
              <Mail />
              <div>
                <p>Email:</p>
                <a href="https://www.instagram.com/amaraa_pnc/" className="hover:underline">24LP8535@nest.edu.mn</a>
               </div>
            </div>
            <div className="flex gap-3 items-center" id="phone">
              <Phone />
              <div>
                <p>Phone:</p>
                <p className="hover:underline">+976 8066-7880</p>
              </div>
            </div>
          </div>
        </div>
 
        <div className="flex flex-col gap-3">
          <a href="https://pinecone.mn/"  className="font-normal hover:underline">Follow us</a>
          <div className="flex flex-col gap-3 font-medium ">
            <a href="https://www.facebook.com/pinecone.academy.mongolia"   className="hover:underline">Facebook</a>
            <a href="https://www.instagram.com/pineconemongolia/" className="hover:underline">Instagram</a>
            <a href="https://x.com/?mx=2" className="hover:underline">Twitter</a>
            <a href="https://www.youtube.com/@PineconeAcademy" className="hover:underline">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
};
 
 
 