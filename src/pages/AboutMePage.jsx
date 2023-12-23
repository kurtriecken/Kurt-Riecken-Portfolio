import notesIcon from '../assets/Kurt_Riecken.jpg'


export default function AboutMe() {
    return (
        <div
            className='card container w-75 border-0 bg-transparent'
            style={{ minHeight: '400px' }}
        >
            <div className='text-center flex'>
                <div className='container row text-end'>
                    <div className='col-6'>
                        <h1 className='row'>Kurt Riecken</h1>
                        <h3 className='row'>Web Developer</h3>
                    </div>
                    <div className='col-6'>
                        <img src={notesIcon} alt="" style={{ width: "90px", border: "solid black 1px", borderRadius: "20px" }} />
                    </div>
                </div>

                <p>Kurt is a multi-talented individual whose passion for web development is rivaled only by his love for life&apos;s simple pleasures.
                    As a web developer, he spends his days crafting digital landscapes and bringing websites to life with his intricate coding skills.
                    With a keen eye for design and an innate understanding of user experience, Kurt is a true maestro in the world of web development.
                    His ability to translate complex ideas into user-friendly interfaces has earned him a reputation as a sought-after professional in the industry.
                    But beyond his coding prowess, Kurt is a man of diverse interests and passions that paint a colorful tapestry of his life.</p>
                <p>When he&apos;s not immersed in the digital realm, Kurt finds solace and joy in the art of cooking. The kitchen becomes his playground,
                    and he takes pride in whipping up culinary masterpieces that delight his family&apos;s taste buds. Speaking of family, Kurt&apos;s heart truly belongs to his wife,
                    two adoring girls, and their faithful four-legged companion. Together, they form a tight-knit unit that shares in the simple pleasures of life,
                    from weekend picnics to cozy evenings by the fireplace. Kurt&apos;s love for music also finds expression in his role as a dedicated orchestra member,
                    where he harmonizes his coding skills with the melodies of his double bass, creating a symphony of passions that define his rich and fulfilling life</p>
            </div>
        </div>
    )
};