import React, { useEffect, FormEvent, useState } from "react";
import ScrollReveal from "scrollreveal";
import { FiMail, FiPhone, FiCornerRightDown } from "react-icons/fi";
import { useToast } from "../../hooks/useToast";

function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call Netlify serverless function instead of EmailJS
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success toast notification
        toast({
          variant: "success",
          title: "Message sent!",
          description: "Your message has been sent successfully.",
        });

        // Clear form data
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);

      // Show error toast notification
      toast({
        variant: "error",
        title: "Error",
        description: "Oops! Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".contact-info", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });

    return () => {
      srLeft.destroy();
      srRight.destroy();
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-20 w-full">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-2xl font-semibold text-white mb-2">Get in touch</h1>
        <span className="text-gray-400">
          Do you have a project in your mind, contact me here
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12">
        <div className="flex w-full md:w-1/2">
          <div className="contact-info relative flex flex-col justify-center items-center p-[20px_30px] w-full h-[315px] bg-primary rounded-[10px] shadow-custom overflow-hidden">
            <h2 className="text-white mb-5 text-2xl font-semibold">
              Find Me <FiCornerRightDown className="inline-block ml-1" />
            </h2>
            <p className="flex items-center gap-2.5 text-white my-[5px]">
              <FiMail className="text-lg" /> Email: chouikhdaly215@gmail.com
            </p>
            <p className="flex items-center gap-2.5 text-white my-[5px]">
              <FiPhone className="text-lg" /> Phone: (+216) 92 871 542
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-1/2">
          <div className="form-control flex flex-col gap-2.5 w-full">
            <form
              className="contact-form flex flex-col gap-2.5 w-full"
              onSubmit={handleSubmit}
            >
              <div className="form-inputs flex flex-col sm:flex-row gap-2.5 w-full">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field w-full sm:w-1/2 h-[55px] bg-transparent border-2 border-gray-400 focus:border-primary rounded-[10px] px-5 outline-none text-white transition-colors duration-300"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field w-full sm:w-1/2 h-[55px] bg-transparent border-2 border-gray-400 focus:border-primary rounded-[10px] px-5 outline-none text-white transition-colors duration-300"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="text-area">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[250px] bg-transparent border-2 border-gray-400 focus:border-primary rounded-[10px] p-5 outline-none resize-none text-white transition-colors duration-300"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="form-button">
                <button
                  className="btn btn-primary flex items-center justify-center gap-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}{" "}
                  <i className="uil uil-message transform -rotate-45"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
