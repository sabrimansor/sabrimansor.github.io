module.exports = `
type Article implements Node @childof(type: "MarkdownRemark"){
    id: ID!
    title: String!
    slug: String!
    date: Date! @dateformat
    image: Image
    category: String!
    project_period: String
    website_link: String
	readingTime: String
    excerpt: String @mdpassthrough(fieldName: "excerpt") 
    content: String @mdpassthrough(fieldName: "html")
}
`;
