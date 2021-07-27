import { StyledTags, TagTitle } from "./StyledTags"

const Tags = () => {
  const tags = ["Business", "Freelance", "Money", "Experience",
    "Lifestyle", "SEO", "Wordpress", "Marketing", "UX", "Modern",
    "Success", "Nature", "Productivity", "Sales page",
    "Sell", "Teamwork", "Monetize"]
  const data = tags.map(x => (<div key={x} className="tag">{x}</div>))

  return (
    <>
      <TagTitle>Tags</TagTitle>
      <StyledTags>
        {data}
      </StyledTags>
    </>
  )
}

export default Tags