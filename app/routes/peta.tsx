import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PetaWilayah() {
  return (
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
  );
}
