import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {

    const {id, name, image, summary} = curElem.show;
    const sum = summary.substring(0,50)+"..."

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={image.original} alt={name}  width={260} height={300} />
                </div>
                <div className={styles.card_data}>
                    <h2>{name.substring(0,18)}</h2>
                    <p dangerouslySetInnerHTML={{__html: sum}}></p>
                    
                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default MovieCard;