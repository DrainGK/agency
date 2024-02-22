import React from 'react'
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

function MeCard(
  ) {
  return (
    <motion.div whileHover="hover" className="w-1/2 h-2/3 relative font-[Oswald]">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <h3 className="text-4xl mb-2 font-[Huntsman] text-[#FFA41B]">Guillaume Lopez</h3>
        <h4 className="text-2xl mb-2 font-thin">Founder</h4>
        <p className="text-sm font-light text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam qui tempora consectetur! Ad, natus. Veniam voluptas sequi reprehenderit adipisci consectetur fugiat commodi aspernatur. Nostrum facere reprehenderit eum distinctio quibusdam sit quod nam laboriosam qui enim, iure, totam, ipsa veritatis harum autem porro accusamus blanditiis nisi rem natus. Placeat magni sapiente dolore perspiciatis exercitationem eaque quidem nesciunt consequuntur! Quaerat, praesentium ut minus in sint sit perspiciatis obcaecati voluptatibus aliquid ad eligendi ratione repellendus, deserunt blanditiis! Consequuntur architecto debitis porro necessitatibus dolorum cumque consequatur eligendi sequi veniam quas illum tempore fuga doloremque officiis, nemo, dolorem incidunt, distinctio ratione adipisci aliquam facilis.</p>
      </div>
      <motion.div
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="absolute inset-0 bg-slate-200 z-10 border-black"
        style={{
          backgroundImage: "url(/guillaumeOpenAi.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <a
        href="#"
        rel="nofollow"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-[#FFA41B] transition-colors"
      >
        <div className="flex items-center">
          <span className="text-lg">MORE</span>
          <FiArrowUpRight className="text-xl" />
        </div>
      </a>
    </motion.div>
  );
};

export default MeCard