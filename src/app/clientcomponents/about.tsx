import { FaLeaf, FaStar, FaShippingFast } from 'react-icons/fa';

export const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About LuxShion</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        LuxShion is more than just a fashion brand - we're a lifestyle. Founded with the vision of bringing
                        premium,
                        sustainable fashion to everyone, we curate collections that blend timeless elegance with
                        contemporary trends.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaLeaf className="text-2xl text-gray-600 dark:text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Sustainable</h3>
                            <p className="text-gray-600 dark:text-gray-400">Eco-friendly materials and ethical production</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaStar className="text-2xl text-gray-600 dark:text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Premium Quality</h3>
                            <p className="text-gray-600 dark:text-gray-400">Carefully selected materials and craftsmanship</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaShippingFast className="text-2xl text-gray-600 dark:text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Fast Delivery</h3>
                            <p className="text-gray-600 dark:text-gray-400">Quick and reliable shipping worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};