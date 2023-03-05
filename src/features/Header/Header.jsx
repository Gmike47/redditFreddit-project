import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css';
import { FaReddit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState();
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

    return (
        <header>
            <div className="logo">
                <FaReddit className="logo-icon" />
                <p>Reddit<span>Freddit</span></p>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input
                type="text"
                placeholder="search Reddit"
                value={searchTermLocal}
                onChange={onSearchTermChange}
                aria-label="search posts"
                />
                <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                    <HiOutlineSearch />
                </button>
            </form>
            <p className="login" title="pliz don't click, it doesn't work">Log In</p>
        </header>
    );
};

export default Header;