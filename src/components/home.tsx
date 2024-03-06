import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useMemo, useState } from "react";
import { GithubProfile } from "../types/github_profile";
import { CardGithubProfileInfos } from "./card_github_profile_info";
import { CardPlaceholder } from "./card_placeholder";
import { GithubError } from "../types/github_error";
import { CardError } from "./card_error";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Button } from "@mui/base";

const Header = ({ onSearch }: { onSearch: (input: string) => void }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="w-full flex h-60 items-center justify-center">
      <div className="flex min-w-96 h-10 border-gray-500 border rounded-full items-center">
        <SearchIcon className="text-white mx-2" />
        <TextField
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{
            className: "text-white p-0 text-xl",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {inputText.length > 0 && (
                  <Button onClick={() => setInputText("")}>
                    <CloseRoundedIcon className="text-white" />
                  </Button>
                )}
              </InputAdornment>
            ),
          }}
          className="text-white w-full mr-2"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(inputText);
            }
          }}
        />
      </div>
    </div>
  );
};

const Results = ({ githubProfile, error }: { githubProfile: GithubProfile | null; error: boolean }) => {
  const content = useMemo(() => {
    if (error) return <CardError />;
    if (!githubProfile) return <CardPlaceholder />;
    return <CardGithubProfileInfos githubProfile={githubProfile} />;
  }, [githubProfile, error]);

  return <div className="flex w-full items-center justify-center">{content}</div>;
};

export function Home() {
  const [user, setUser] = useState<GithubProfile | null>(null);
  const [error, setError] = useState(false);
  const onSearch = (input: string) => {
    if (input === "") {
      return;
    }
    fetch(`https://api.github.com/users/${input}`)
      .then((response) => response.json() as GithubProfile | GithubError)
      .then((data) => {
        if ((data as GithubError)?.message) {
          setUser(null);
          setError(true);
          return;
        }
        setUser(data as GithubProfile);
        setError(false);
      });
  };

  console.log(user);

  return (
    <div className="flex flex-col w-full justify-center">
      <Header onSearch={onSearch} />
      <Results githubProfile={user} error={error} />
    </div>
  );
}
