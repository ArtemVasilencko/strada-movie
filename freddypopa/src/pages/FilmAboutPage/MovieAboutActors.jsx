import { Image, Typography } from "antd";
import { getImageUrl } from "../../components/utils/getImageUrl";
import "./filmAboutPage.css";
const { Paragraph, Text } = Typography;

export const MovieAboutActors = ({ movieAboutCredits }) => {
  return (
    movieAboutCredits.cast[0] &&
    movieAboutCredits.cast.slice(0, 4).map((actor) => (
      <div
        key={actor.id}
        style={{
          marginBottom: "16px",
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
        }}
      >
        <Image
          width={80}
          alt={actor.name}
          src={getImageUrl(actor.profile_path)}
        />
        <div
          style={{
            marginLeft: "8px",
          }}
        >
          <Text strong style={{ color: "#ffffff" }}>
            {actor.name}
          </Text>
          <Paragraph style={{ color: "#ffffff" }}>{actor.character}</Paragraph>
        </div>
      </div>
    ))
  );
};
