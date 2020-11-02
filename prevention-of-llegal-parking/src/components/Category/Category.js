import React from "react";

import Icons from "../../assets/images/Icons";

import "./Category.scss";

const CategoryItem = ({ title, icon }) => {
    return (
        <div className="category-item">
            <div className="category-button">
                <Icons>{icon}</Icons>
            </div>
            <div className="nav-title">{title}</div>
        </div>
    );
};

const Category = ({ filterParkLocation }) => {
    const category = [
        {
            id: 1,
            title: "전체",
            icon: "home",
        },
        {
            id: 2,
            title: "CCTV",
            icon: "cctv",
        },
        {
            id: 3,
            title: "어린이 보호구역",
            icon: "children",
        },
        {
            id: 4,
            title: "주차장",
            icon: "parking",
        },
    ];
    return (
        <ul className="category">
            {category.map(({ id, title, icon }) => (
                <li
                    key={id}
                    className="category-item"
                    onClick={() => {
                        filterParkLocation(id);
                    }}
                >
                    <CategoryItem title={title} icon={icon}></CategoryItem>
                </li>
            ))}
        </ul>
    );
};

export default Category;
