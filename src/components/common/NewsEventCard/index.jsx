import React, { useState } from "react";
import StandardCard from "../StandardCard";
import { getDate } from "../../../utils/current date";
import styles from "./NewsEventCard.module.scss";

const NewsEventCard = () => {
  const [newsEvents, setNewsEvents] = useState([
    {
      title: "Apple",
      description:
        "Lorem Peach dolor sit amet consectetur adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntur",
      currentDate: getDate(),
      link: "https://www.google.com",
    },
    {
      title: "Orange",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntu",
      currentDate: getDate(),
      link: "https://www.google.com",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet Grape adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntu",
      currentDate: getDate(),
      link: "https://www.example.com",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntu",
      currentDate: getDate(),
      link: "https://www.anotherlink.com",
    },
    {
      title: "Grape",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntu",
      currentDate: getDate(),
      link: "https://www.google.com",
    },
    {
      title: "Peach",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntu",
      currentDate: getDate(),
      link: "https://example.com",
    },
    {
      title: "Title 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntu",
      currentDate: getDate(),
      link: "https://anotherlink.com",
    },
    {
      title: "Title 7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntu",
      currentDate: getDate(),
      link: "https://www.google.com",
    },
    {
      title: "Title 8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntu",
      currentDate: getDate(),
      link: "https://example.com",
    },
    {
      title: "Title 9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem sapiente laudantium omnis vero nesciunt ea, culpa consequuntu",
      currentDate: getDate(),
      link: "https://anotherlink.com",
    },
  ]);
  const [sortedList, setSortedList] = useState(newsEvents);
  const [input, setInput] = useState(null);

  const handleSearch = (event) => {
    setInput(event.target.value.toLowerCase());

    const filteredList = newsEvents.filter(
      (item) =>
        item.title.toLowerCase().includes(input) ||
        item.description.toLowerCase().includes(input)
    );
    setSortedList(filteredList);
  };

  return (
    <StandardCard>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Latest News and Events</p>
          <input
            type="text"
            placeholder="Filter by ..."
            onChange={handleSearch}
          />
        </div>
        <div className={styles.result}>
          {sortedList?.map((item, index) => (
            <div className={styles.resultCard} key={index}>
              <div className={styles.titleDes}>
                <p id={styles.title}>{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </div>
              <div className={styles.dateLink}>
                <p id={styles.date}>{item.currentDate}</p>
                <a
                  href={item}
                  style={{ color: "#8000FF", textDecoration: "underline" }}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StandardCard>
  );
};

export default NewsEventCard;
