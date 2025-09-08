import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sejarah() {
    return (
        <div className="p-6">
            {/* Sejarah desa */}
            <section className="">
                <h1 className="">sejarah desa</h1>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, iure, ratione enim inventore voluptatum ipsum, nisi maiores mollitia itaque accusantium sequi adipisci perferendis amet deleniti labore expedita et fuga suscipit?
                </p>
            </section>

            {/* visi desa*/}
            <section className="">
                <h1 className=""> visi </h1>
                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis corrupti iusto, saepe neque expedita obcaecati, officia commodi qui, blanditiis provident molestias. Possimus tempora fugiat hic, reiciendis corrupti quidem ex molestiae!</p>
            </section>

            {/* misi desa */}
            <section className="">
                <h1 className=""> misi</h1>
                <p className="">
                    misi kami adalah
                </p>
            </section>
            <section className="">
                <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18873.894949623074!2d119.57238220905724!3d-5.191476516576447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee5eafa291fc3%3A0xe7f6e54298df8ea8!2sPanaikang%2C%20Kec.%20Pattallassang%2C%20Kabupaten%20Gowa%2C%20Sulawesi%20Selatan!5e1!3m2!1sid!2sid!4v1756401466949!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
            </section>
        </div>
    );
}