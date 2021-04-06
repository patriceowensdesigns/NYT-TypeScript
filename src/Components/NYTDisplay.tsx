import {IResult, IKeywords} from './Interfaces';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { SyntheticEvent } from 'react';

interface IProps {
  results: IResult[];
  handlePage: (event: SyntheticEvent, direction: string) => void;
}

const NYTDisplay = ({results, handlePage} : IProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {results.map((result) => {
        return (
          <Card key={result._id} style={{ margin: "2em", width: "30%" }}>
            <CardBody>
              <CardTitle>{result.headline.main}</CardTitle>
              {result.multimedia.length > 1 ? (
                <CardImg
                  alt="article"
                  src={`https://www.nytimes.com/${result.multimedia[1].url}`}
                />
              ) : (
                ""
              )}
              <CardSubtitle>
                {result.snippet}
                <br />
                {result.keywords.length > 0 ? " Keywords: " : ""}
              </CardSubtitle>
              {result.keywords.map((keyword: IKeywords) => (
                <CardText key={keyword.value}>{keyword.value}</CardText>
              ))}
              <a href={result.web_url}>
                <Button>Read It</Button>
              </a>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default NYTDisplay;
