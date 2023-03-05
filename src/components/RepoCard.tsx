import React from "react";
import { IRepo } from "../models/models";
import {useActions} from "../hooks/useActions";
import {useAppSelector} from "../hooks/useAppSelector";

export const RepoCard = ({ repo }: { repo: IRepo }) => {
  const {addFavourite, removeFavourite} = useActions();
  const {favourites} = useAppSelector(state => state.githubReducer)
  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFavourite(repo.full_name);
  };
  const removeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFavourite(repo.full_name);
  };
  const button = () => {
      if (favourites.find(item => item === repo.full_name)) {
          return <button
              onClick={removeHandler}
              className="py-2 px-4 bg-black text-white rounded hover:shadow-md transition-all"
          >
              Remove
          </button>
      }
      else {
          return <button
              onClick={addHandler}
              className="py-2 mr-5 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
          >
              Add
          </button>
      }
  }
  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a target="_blank" href={repo.html_url}>
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
          {button()}
      </a>
    </div>
  );
};
