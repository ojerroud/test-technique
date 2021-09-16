import React, { useState, useEffect } from "react";
import "./Autoselect.css";
import Buttons from "../Buttons/Buttons";

const Autoselect = ({ api, setApi, setEpisode, setChars }) => {
	const [currApi, setCurrApi] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const responseJSON = await fetch(api.curr);
			const responseData = await responseJSON.json();
			setData(Object.values(responseData.results));
			if (responseData.info.next) {
				setApi({
					curr: api.curr,
					prev: responseData.info.prev,
					next: responseData.info.next,
				});
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			if (currApi) {
				const responseJSON = await fetch(currApi);
				const responseData = await responseJSON.json();
				setData(Object.values(responseData.results));
				setApi({
					curr: currApi,
					prev: responseData.info.prev,
					next: responseData.info.next,
				});
			}
		};

		fetchData();
	}, [currApi]);

	return (
		<div className="autoselect">
			<h3>List of episodes:</h3>
			<Buttons api={api} setCurrApi={setCurrApi} setChars={setChars} />
			<ul>
				{data.map((episode, index) => (
					<li
						key={index}
						onClick={(e) => setEpisode(e.target.childNodes[1].nodeValue)}
					>
						Episode {episode.episode} : {episode.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Autoselect;
