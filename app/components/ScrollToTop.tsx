"use client";
export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <span
      className="text-sm text-blue-600 underline cursor-pointer"
      onClick={scrollToTop}
    >
      Scroll to Top
    </span>
  );
}
