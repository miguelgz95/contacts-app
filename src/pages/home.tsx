import HomeCard from "@components/Cards/HomeCard";
import Layout from "Layouts/Layout";
import { getUsers } from "app/api/users";
import { NextPage } from "next";
import { BiSolidStar, BiUser } from "react-icons/bi";

const Home: NextPage = () => {
    const data = getUsers();

    return (
        <Layout>
            <div className="w-full mt-3.5">
                <div className="w-full md:w-fit rounded-md px-4 py-1.5 bg-white border border-slate-200">
                    <div className="w-full flex items-center space-x-2">
                        <p className="text-zinc-900 text-xl font-medium tracking-wider">
                            Hola,
                        </p>
                        <p className="text-slate-400 font-medium tracking-wider pt-1">
                            {data[0].name}
                        </p>
                        <p className="wave text-xl mt-[-2.5px] pt-1"> 👋</p>
                    </div>
                    <div className="tracking-wider text-zinc-900 ">
                        Bienvenido a la página principal de Contacts App
                    </div>
                </div>
                <div className="md:flex mt-2.5 md:space-x-2.5 ">
                    <div className="w-full md:w-fit">
                        <HomeCard
                            href="?add"
                            icon={<BiUser color="white" size={22} />}
                            title="Añadir contacto"
                            description="Crea y guarda un nuevo contacto"
                        />
                    </div>
                    <div className="w-full md:w-fit mt-2.5 md:mt-0">
                        <HomeCard
                            href=""
                            bgColorIcon="bg-yellow-300"
                            icon={<BiSolidStar color="white" size={20} />}
                            title="Favoritos"
                            description="Visualiza los contactos marcados como favorito"
                        />
                    </div>
                </div>
            </div>
            <style>
                {`
                .wave {
                    animation-name: wave-animation;  
                    animation-duration: 2.5s;       
                    animation-iteration-count: infinite; 
                    transform-origin: 70% 70%;       
                    display: inline-block;
                  }
                  
                  @keyframes wave-animation {
                      0% { transform: rotate( 0.0deg) }
                     10% { transform: rotate(14.0deg) }  
                     20% { transform: rotate(-8.0deg) }
                     30% { transform: rotate(14.0deg) }
                     40% { transform: rotate(-4.0deg) }
                     50% { transform: rotate(10.0deg) }
                     60% { transform: rotate( 0.0deg) } 
                    100% { transform: rotate( 0.0deg) }
                  }`}
            </style>
        </Layout>
    );
};

export default Home;
