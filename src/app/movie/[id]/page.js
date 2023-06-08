import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Booking from '@/app/components/Booking';

const Page = async ({params}) => {
    const id = params.id;
    console.log(id)

    const url = process.env.APIKEY
    
    const res = await fetch(url);
    const data = await res.json();
    
    const main_data = data.find(({show})=>show.id==id)

    return (

            <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.show.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={main_data.show.image.original} alt={main_data.show.name} width={200} height={300} />
                    </div>
                    <div>
                        <h1>{main_data.show.name}</h1>
                        <p dangerouslySetInnerHTML={{__html: main_data.show.summary}}></p>
                    </div>
                </div>
                <Booking {...main_data}/>
            </div>

    );
};

export default Page;