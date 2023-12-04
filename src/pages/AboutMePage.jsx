import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons'


export default function AboutMe() {
    return (
        <div className='card container w-75 border-0 bg-transparent'>
            <div className='text-center flex'>
                <h1>Kurt Riecken</h1>
                <h3>Full-Stack Web Developer</h3>
                <p>Kurt is a multi-talented individual whose passion for web development is rivaled only by his love for life's simple pleasures. 
                    As a web developer, he spends his days crafting digital landscapes and bringing websites to life with his intricate coding skills. 
                    With a keen eye for design and an innate understanding of user experience, Kurt is a true maestro in the world of web development. 
                    His ability to translate complex ideas into user-friendly interfaces has earned him a reputation as a sought-after professional in the industry. 
                    But beyond his coding prowess, Kurt is a man of diverse interests and passions that paint a colorful tapestry of his life.</p>
                <p>When he's not immersed in the digital realm, Kurt finds solace and joy in the art of cooking. The kitchen becomes his playground, 
                    and he takes pride in whipping up culinary masterpieces that delight his family's taste buds. Speaking of family, Kurt's heart truly belongs to his wife, 
                    two adoring girls, and their faithful four-legged companion. Together, they form a tight-knit unit that shares in the simple pleasures of life, 
                    from weekend picnics to cozy evenings by the fireplace. Kurt's love for music also finds expression in his role as a dedicated orchestra member, 
                    where he harmonizes his coding skills with the melodies of his double bass, creating a symphony of passions that define his rich and fulfilling life</p>
            </div>
            <Link className='m-auto' to="/"><FontAwesomeIcon icon={faHouseChimneyWindow} style={{width: "35px", height: 'auto'}}/></Link>
        </div>
    )
};