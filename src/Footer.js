import logo from './assets/images/coffee-house-logo.png';

export default function Footer() {
    return (
        <div className="bg-yellow-50 max-w-screen-2xl mx-auto" id="contact">
            <div className="flex flex-wrap md:flex-nowrap justify-center space-y-20 md:space-y-0 py-14 md:divide-x md:divide-brown-500 max-w-screen-xl mx-auto text-brown-700">
                <div className="md:w-1/2">
                    <div className="max-w-md mx-auto text-center">
                        <img width="150" height="139" className="mx-auto" src={logo} alt="Coffee House logo" />
                        <p className="max-w-sm mx-auto">Temporary actions come before formal elegance. Avoid stress and focus on a relaxed approach.</p>
                    </div>
                </div>
                <div className="md:w-1/2 self-center text-gray-800">
                    <div className="max-w-md mx-auto text-center mb-6">
                        <h3 className="font-medium font-serif text-lg mb-3">Contact Us</h3>
                        <p>+91 9572104099</p>
                        <p>blackpearl9572@gmail.com</p>
                        <p>
                            <a
                                href="https://www.google.com/maps/place/Bihta,+Bihar+801103/@25.5535834,84.8692677,15z/data=!3m1!4b1!4m6!3m5!1s0x398d55f11dd9f813:0x6d3ae9bae8e85ece!8m2!3d25.5535839!4d84.8692677!16s%2Fm%2F0qr_1q3?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Bihta, Patna, Bihar 801103
                            </a>
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-4 justify-center">
                        <a href="#contact" className="transform transition duration-500 ease-in-out hover:-scale-x-1 block">
                            <svg className="w-4" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000" d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                                <path fill="#fff" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
                            </svg>
                        </a>
                        <a href="#contact" className="transform transition duration-500 ease-in-out hover:-scale-x-1 block">
                            <svg className="w-4" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g transform="translate(-705.000000, -41.000000)" fill="#000">
                                        <path d="M720.994984,41.0100952 C725.338921,41.0100952 725.883619,41.0285079 727.589651,41.1063492 C729.292127,41.184 730.454857,41.4544127 731.472254,41.8498413 C732.524063,42.2585397 733.416063,42.8054603 734.305333,43.6946667 C735.19454,44.5839365 735.74146,45.4759365 736.150222,46.527746 C736.545587,47.5451429 736.816,48.707873 736.893651,50.4103492 C736.971492,52.116381 736.989905,52.6610794 736.989905,57.0050794 C736.989905,61.3490159 736.971492,61.8937143 736.893651,63.599746 C736.816,65.3022222 736.545587,66.4649524 736.150222,67.4823492 C735.74146,68.5341587 735.19454,69.4261587 734.305333,70.3154286 C733.416063,71.2046349 732.524063,71.7515556 731.472254,72.1603175 C730.454857,72.5556825 729.292127,72.8260952 727.589651,72.903746 C725.883619,72.9815873 725.338921,73 720.994984,73 C716.650984,73 716.106286,72.9815873 714.400254,72.903746 C712.697778,72.8260952 711.535048,72.5556825 710.517651,72.1603175 C709.465841,71.7515556 708.573841,71.2046349 707.684571,70.3154286 C706.795365,69.4261587 706.248444,68.5341587 705.839746,67.4823492 C705.444317,66.4649524 705.173905,65.3022222 705.096254,63.599746 C705.018413,61.8937143 705,61.3490159 705,57.0050794 C705,52.6610794 705.018413,52.116381 705.096254,50.4103492 C705.173905,48.707873 705.444317,47.5451429 705.839746,46.527746 C706.248444,45.4759365 706.795365,44.5839365 707.684571,43.6946667 C708.573841,42.8054603 709.465841,42.2585397 710.517651,41.8498413 C711.535048,41.4544127 712.697778,41.184 714.400254,41.1063492 C716.106286,41.0285079 716.650984,41.0100952 720.994984,41.0100952 Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-gray-800 text-center py-2">
                <p className="text-sm">
                    <a href="#contact" className="hover:underline">Back to top</a>
                </p>
            </div>
        </div>
    );
}
