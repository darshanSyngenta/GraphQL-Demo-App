npm init
npm install graphql --save


npm install @prisma/cli --save-dev
npx prisma init
npx prisma introspect
npm install @prisma/client
npx prisma generate

--Repeat below commands whenever you make change to Database Tables
npx prisma introspect
npx prisma generate
merge-graphql-schemas

mutation{
  createBook(book:{BookId:25,Description:"This is Kids story book",Title:"Harry potter",author:{AuthorId:30,Name:"J K Rolling",Age:50}})
}



