import './style.css';
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { IconContext } from 'react-icons';
import { BsEmojiSmile } from "react-icons/bs";

export function Post() {
    const posts = [
        {
            id: 1,
            user: "TeddyPhotos",
            profileImage: "https://www.eventim.com.br/obj/media/BR-eventim/galery/222x222/e/ed-sheeran-222x222.jpg",
            image: "https://billboard-com-br.s3.amazonaws.com/wp-content/uploads/2024/09/20011846/edsheeran-rockinrio.jpg",
            likes: "994.520",
            caption: "Rock in Rio, 2024.",
            time: "HÁ 3 HORAS",
        },
        {
            id: 2,
            user: "Taylor Swift",
            profileImage: "https://64.media.tumblr.com/5fa286178090b3ab35b71dd129c5de11/777611ae5a656e9b-4c/s400x600/7e42eadeac01ce69248daeef2ee90dfe587a48e2.png", 
            image: "https://s2-vogue.glbimg.com/ZLxfv_rUtz8C5BsHy5xamg5h7SE=/0x280:4285x4093/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2024/m/M/ACQHM7QKSwuun7hI5PNg/taylor-swift.jpg",
            likes: "123.456",
            caption: "VMA 2024.",
            time: "HÁ 1 DIA",
        },
        {
            id: 3,
            user: "Jão",
            profileImage: "https://i.pinimg.com/474x/79/24/6b/79246bbf4cbea1be1de96a1d1fed60d0.jpg",
            image: "https://inmagazine.ig.com.br/wp-content/uploads/2024/01/Snapinsta.app_420009577_331783323174666_8077203552466744942_n_1080-1024x683.jpg",
            likes: "789.012",
            caption: "A melhor noite das nossas vidas. Obrigada, São Paulo.",
            time: "HÁ 2 DIAS",
        },
    ];

    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <header className="headerpost">
                        <div className="infosPost">
                            <img className="imgheader" src={post.profileImage} alt={post.user} /> 
                            <p>{post.user}</p>
                        </div>
                        <FiMoreHorizontal />
                    </header>

                    <div className="imgPost">
                        <img src={post.image} alt={post.user} />
                    </div>

                    <div className="rodape">
                        <IconContext.Provider value={{ size: "30px" }}>
                            <section className="engajamento">
                                <div className="icons1">
                                    <div className="iconsEngajamento"><IoMdHeart /></div>
                                    <div className="iconsEngajamento"><BsChat /></div>
                                    <div className="iconsEngajamento"><FiSend /></div>
                                </div>
                                <div className="iconsEngajamento"><BsBookmark /></div>
                            </section>
                        </IconContext.Provider>

                        <section className="like">
                            <span>{post.likes} curtidas</span>
                        </section>

                        <div className="legenda">
                            <p>
                                <strong>{post.user} </strong>{post.caption}
                            </p>
                        </div>

                        <div className="tempo">
                            <time>{post.time}</time>
                        </div>

                        <div className="comentarios">
                            <div className="comentariofake">
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <div className="icon">
                                        <BsEmojiSmile />
                                    </div>
                                </IconContext.Provider>
                                <input placeholder="Adicione um comentário..." />
                            </div>
                            <button>Publicar</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

//git