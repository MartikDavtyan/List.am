import React from 'react';
import '../../companents-css/Story/story.css';
import StoryEl from './StoryEl.jsx';

export default function Story() {
    const storyBassa = [
        {
            key: 1,
            bc: '#009dcf',
            c: '#fff',
            img: 'url(https://sa.list.am/220.png)',
            text: 'Օրավարձով բնակարաններ',
        },
        {
            key: 2,
            bc: '#CDE6CC',
            c: '#ffffff',
            img: 'url(https://sa.list.am/328.png)',
            text: 'Նոթբուքի պայուսակներ',
        },
        {
            key: 3,
            bc: '#93BBEE',
            c: '#ffffff',
            img: 'url(https://sa.list.am/220.png)', // Update with actual image URL
            text: 'Արտադրված է Հայաստանում',
        },
        {
            key: 4,
            bc: '#D6C3E8',
            c: '#000',
            img: 'url(https://sa.list.am/328.png)', // Update with actual image URL
            text: 'Խթանեք Ձեր բիզնեսը',
        },
        {
            key: 5,
            bc: '#FAE56E',
            c: '#000',
            img: 'url(https://sa.list.am/329.png)', // Update with actual image URL
            text: 'Սեղանի խաղեր',
        },
        {
            key: 6,
            bc: '#D9D7CE',
            c: '#000',
            img: 'url(https://sa.list.am/311.png)', // Update with actual image URL
            text: 'Տղամարդկանց կոշիկներ',
        },
        {
            key: 7,
            bc: '#e57d15',
            c: '#fff',
            img: 'url(https://sa.list.am/221.png)', // Update with actual image URL
            text: 'List.am-ում անվտանգություն',
        },
        {
            key: 8,
            bc: '#006aff',
            c: '#ffffff',
            img: 'url(https://sa.list.am/215.png)', // Update with actual image URL
            text: 'Էլեկտրական մեքենաներ',
        }
    ];

    return (
        <div className="c">
            {storyBassa.map((el) => (
                <StoryEl key={el.key} bc={el.bc} c={el.c} img={el.img} text={el.text} />
            ))}
        </div>
    );
}
