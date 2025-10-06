import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Globe, Leaf, MapPin, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

export default function SidamaCoffeeCatalogue() {
  const cuppingData = [
    { attribute: "Aroma", score: 9.0 },
    { attribute: "Flavor", score: 8.8 },
    { attribute: "Acidity", score: 8.6 },
    { attribute: "Body", score: 8.7 },
    { attribute: "Aftertaste", score: 8.9 },
    { attribute: "Balance", score: 8.8 },
  ];

  const farmers = [
    {
      name: "Abebe Guta",
      role: "Lead Farmer, Bensa Cooperative",
      story: "Abebe has been cultivating coffee for over 25 years. His meticulous hand-sorting and sun-drying methods preserve the unique aroma of Sidama beans.",
      image: "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e",
    },
    {
      name: "Marta Bekele",
      role: "Women’s Coffee Producer, Aleta Wendo",
      story: "Marta leads a collective of 40 women farmers who emphasize sustainable harvesting and environmental protection in every coffee cherry.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Tadesse Alemu",
      role: "Youth Cooperative Leader, Arbegona",
      story: "Tadesse represents a new generation of coffee growers blending tradition with innovation, ensuring Sidama’s legacy continues globally.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-amber-100 via-white to-amber-50 text-brown-900 font-serif p-8 max-w-5xl mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gold-fibers.png')] opacity-20 pointer-events-none" />
      <div className="absolute inset-4 border-4 border-yellow-600 rounded-3xl opacity-60 pointer-events-none" />

      {/* Cover Page */}
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20 relative z-10">
        <h1 className="text-5xl font-bold mb-4 tracking-wide text-yellow-800 drop-shadow-md">Diaspora Investment Group</h1>
        <p className="text-lg italic text-yellow-700 mb-2">Sidama Specialty Coffee Catalogue</p>
        <p className="text-xl font-light text-yellow-900">“From the Lands of Sidama to the World”</p>
      </motion.section>

      {/* About Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-10 items-center py-16 relative z-10">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-yellow-800">About Us</h2>
          <p className="text-lg leading-relaxed text-brown-800">
            Diaspora Investment Group proudly exports the finest Sidama Specialty Coffee, handpicked from the lush highlands of southern Ethiopia. 
            Our mission is to connect the world to the authentic taste of Sidama — a region where fertile soils, perfect altitude, and time-honored traditions 
            create beans of exceptional character and fragrance. We bring coffee not just as a product, but as a story of people, passion, and place.
          </p>
        </div>
        <div className="rounded-3xl shadow-2xl border-2 border-yellow-600 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5" alt="Sidama Coffee Farm" className="object-cover w-full h-80" />
        </div>
      </motion.section>

      {/* Coffee Origin */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="py-16 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-800">The Origin: Sidama Highlands</h2>
        <p className="max-w-3xl mx-auto text-lg text-brown-800 mb-8">
          Nestled between 1,500 and 2,200 meters above sea level, the Sidama region is Ethiopia’s cradle of specialty coffee. 
          Here, coffee trees thrive under a natural canopy, nurtured by misty mornings and volcanic soil. Every cherry is hand-harvested 
          by local farmers whose knowledge of coffee spans generations.
        </p>
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" alt="Sidama Landscape" className="mx-auto rounded-3xl shadow-xl border-2 border-yellow-700 w-full max-w-3xl" />
      </motion.section>

      {/* Coffee Profiles */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-20 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-10 text-yellow-800">Our Coffee Profiles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            name: "Sidama Washed Specialty",
            flavor: "Floral aroma, citrus brightness, tea-like body",
            altitude: "1,700–2,000 m.a.s.l.",
            process: "Washed (Wet Process)",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          }, {
            name: "Sidama Natural Grade 1",
            flavor: "Sweet berry notes, velvety texture, chocolate finish",
            altitude: "1,600–1,900 m.a.s.l.",
            process: "Natural (Sun-Dried)",
            image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0"
          }, {
            name: "Sidama Organic Reserve",
            flavor: "Honey sweetness, jasmine aroma, clean finish",
            altitude: "1,800–2,100 m.a.s.l.",
            process: "Organic Certified, Washed",
            image: "https://images.unsplash.com/photo-1481391032119-d89fee407e44"
          }].map((coffee, i) => (
            <Card key={i} className="rounded-3xl overflow-hidden shadow-lg border border-yellow-600 bg-white/90 backdrop-blur-sm">
              <img src={coffee.image} alt={coffee.name} className="h-56 w-full object-cover border-b-2 border-yellow-600" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-800">{coffee.name}</h3>
                <p className="text-brown-800 text-sm mb-1"><strong>Flavor Notes:</strong> {coffee.flavor}</p>
                <p className="text-brown-800 text-sm mb-1"><strong>Altitude:</strong> {coffee.altitude}</p>
                <p className="text-brown-800 text-sm"><strong>Process:</strong> {coffee.process}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Cupping Profile Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="py-20 bg-amber-50 rounded-3xl mt-10 text-center border border-yellow-600 relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-800">Cupping Profile Chart</h2>
        <p className="text-lg text-brown-800 mb-10 max-w-2xl mx-auto">
          Each cup of Sidama Specialty Coffee reveals a symphony of flavors. Evaluated by expert Q-graders, our beans consistently achieve top specialty scores.
        </p>
        <div className="h-96 w-full flex justify-center">
          <ResponsiveContainer width="80%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={cuppingData}>
              <PolarGrid stroke="#b45309" />
              <PolarAngleAxis dataKey="attribute" stroke="#92400e" tick={{ fontSize: 14, fill: '#78350f' }} />
              <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} />
              <Radar name="Score" dataKey="score" stroke="#ca8a04" fill="#facc15" fillOpacity={0.4} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center mt-8 text-yellow-800">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-600 mx-1" />
          ))}
        </div>
        <p className="mt-4 text-brown-700 italic">Average Cupping Score: 88.5 / 100</p>
      </motion.section>

      {/* Meet Our Farmers Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="py-20 bg-gradient-to-r from-amber-100 to-amber-50 rounded-3xl mt-12 border border-yellow-600 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-800 flex justify-center items-center gap-2"><Users className="w-8 h-8 text-yellow-700" />Meet Our Farmers</h2>
        <p className="max-w-3xl mx-auto text-lg text-brown-800 mb-12">
          Behind every bean is a dedicated farmer who pours heart and heritage into every harvest. Together, they uphold Sidama’s legacy of excellence and sustainability.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {farmers.map((farmer, i) => (
            <Card key={i} className="rounded-3xl overflow-hidden shadow-xl border border-yellow-600 bg-white/90 backdrop-blur-sm">
              <img src={farmer.image} alt={farmer.name} className="h-64 w-full object-cover border-b-2 border-yellow-600" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-1">{farmer.name}</h3>
                <p className="text-sm italic text-brown-700 mb-3">{farmer.role}</p>
                <p className="text-brown-800 text-sm leading-relaxed">{farmer.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Sustainability Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-16 bg-gradient-to-r from-amber-200 to-amber-100 rounded-3xl mt-12 text-center border border-yellow-600 relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-800">Sustainability & Commitment</h2>
        <p className="max-w-3xl mx-auto text-lg text-brown-800">
          We work hand-in-hand with smallholder farmers, ensuring fair compensation, environmental stewardship, and traceable sourcing. 
          Our supply chain is built on ethical relationships and a shared passion for preserving Sidama’s natural beauty.
        </p>
      </motion.section>

      {/* Certifications */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-16 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-800">Certifications & Quality</h2>
        <div className="flex justify-center gap-12 flex-wrap mt-8">
          <div className="flex flex-col items-center">
            <Leaf className="w-10 h-10 text-green-700 mb-2" />
            <p>Organic Certified</p>
          </div>
          <div className="flex flex-col items-center">
            <Coffee className="w-10 h-10 text-amber-800 mb-2" />
            <p>Specialty Grade</p>
          </div>
          <div className="flex flex-col items-center">
            <Globe className="w-10 h-10 text-blue-700 mb-2" />
            <p>Export Standard</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-10 h-10 text-red-700 mb-2" />
            <p>Traceable Origin</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-20 text-center border-t mt-12 relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-800">Contact & Export Inquiries</h2>
        <p className="text-lg mb-4 text-brown-900">Diaspora Investment Group</p>
        <p className="text-brown-700 mb-1">Sidama Region, Ethiopia</p>
        <p className="text-brown-700 mb-1">Email: info@diasporacoffeeexport.com</p>
        <p className="text-brown-700 mb-1">Phone: +251 911 000 000</p>
        <Button className="mt-6 bg-yellow-700 hover:bg-yellow-800 text-white rounded-xl px-6 py-3 text-lg shadow-md">Request Sample</Button>
      </motion.section>
    </div>
  );
}
