import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
    return (
        <div className='bg-gray-100'>
            <Navbar />
            <section className="bg-gray-100 py-12 mb-0">
                <div className="container mx-auto px-4">

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Caveat, cursive', fontSize: '3rem', color: '#f9a8d4' }}>Dove trovarci</h3>
                        <address className="text-gray-600">
                            SWF New York 185669<br />
                            USA<br />

                        </address>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Telefono</h3>
                        <p className="text-gray-600">1800333665</p>
                    </div>

                    <div className="relative h-0 overflow-hidden mb-6" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.096656292789!2d-122.08217698485344!3d37.42205787981786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc7b4be10725%3A0xf59d178a87b32f52!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1610035984427!5m2!1sen!2sus"
                            frameBorder="0"
                            style={{ border: '0' }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact
