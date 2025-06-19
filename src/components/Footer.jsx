

const Footer = () => {
    return (
        <footer className="bg-black text-white px-10 py-20 h-96 w-screen mt-28">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

    <div className="text-white p-4 gap-3">
        <div className="text-xl font-bold mb-2">SkinCareSample</div>
        Designed by Alok. Powered by Nexolve.
        © 2025 SkinCareSample.
    </div>

    <div className="text-white p-4 gap-3">
        Contact info
        <ul className="space-y-2 text-gray-300">
            <li>4517 Washington Ave.</li>
            <li>Manchester, Kentucky 39495</li>
            <li>user@example.com</li>
            <li>+(239) 555-0108</li>
        </ul>
    </div>

    <div className="text-white p-4 gap-3">
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline transition">About Us</a></li>
        <li><a href="#" className="hover:underline transition">Categories</a></li>
        <li><a href="#" className="hover:underline transition">Shop</a></li>
        <li><a href="#" className="hover:underline transition">Reviews</a></li>
        <li><a href="#" className="hover:underline transition">Blog</a></li>
        <li><a href="#" className="hover:underline transition">Contact Us</a></li>
        <li><a href="#" className="hover:underline transition">Store Locator</a></li>
      </ul>
    </div>

    <div className="text-white p-4 gap-3">
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline transition">FAQ</a></li>
        <li><a href="#" className="hover:underline transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline transition">Terms & Conditions</a></li>
        <li><a href="#" className="hover:underline transition">Return Policy</a></li>
        <li><a href="#" className="hover:underline transition">Style Guide</a></li>
        <li><a href="#" className="hover:underline transition">Licensing</a></li>
        <li><a href="#" className="hover:underline transition">Changelog</a></li>
      </ul>
    </div>

  </div>
</footer>
    )
};
export default Footer;