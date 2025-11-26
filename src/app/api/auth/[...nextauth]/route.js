// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        // Use the GET endpoint that returns user by email.
        // Adjust path to match your backend: /user/:email or /user?email=...
        const email = encodeURIComponent(credentials.email);
        const res = await fetch(
          `https://next-js-ecom-server.vercel.app/user/${email}`
        );
        if (!res.ok) {
          // e.g. 404
          throw new Error("Failed to fetch user");
        }

        const user = await res.json();
        if (!user) throw new Error("No user found with this email");

        // If you stored plaintext (not recommended)
        if (user.password === credentials.password) {
          return {
            id: user._id ?? user.id,
            name: user.username ?? user.name,
            email: user.email,
            image: user.image,
          };
        }

        // If you stored hashed password with bcrypt
        // Uncomment below if you hash passwords on register:
        // const isValid = await bcrypt.compare(credentials.password, user.password);
        // if (isValid) return { id: user._id, name: user.username, email: user.email, image: user.image };

        throw new Error("Invalid email or password");
      },
    }),
  ],

  pages: {
    signIn: "/login", // optional custom sign in page
    error: "/login", // route to show errors (error query param)
  },

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },

  // Helpful for debugging in development
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };

//  import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: {
//           label: "Username",
//           type: "text",
//           placeholder: "j smith",
//         },
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "aniksarker@gmail.com",
//         },
//         image: {
//           label: "Image",

//           type: "text",
//           placeholder: "photoURL",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         if (!credentials.username) {
//           throw new Error("Username is required");
//         }
//         if (!credentials.email) {
//           throw new Error("Email is required");
//         }
//         if (!credentials.image) {
//           throw new Error("Image URL is required");
//         }
//         if (!credentials.password) {
//           throw new Error("Password is required");
//         }
//         const userData = {
//           name: credentials.username,
//           email: credentials.email,
//           image: credentials.image,
//           password: credentials.password,
//         };
//         const res = await fetch("https://next-js-ecom-server.vercel.app/user", {
//           method: "POST",
//           body: JSON.stringify(userData),
//           headers: { "Content-Type": "application/json" },
//         });
//         const user = await res.json();
//         console.log(userData);
//         if (userData) {
//           // Any object returned will be saved in `user` property of the JWT
//           return userData;
//         } else {
//           // If you return null then an error will be displayed advising the user to check their details.
//           return null;

//           // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         }
//       },
//     }),
//   ],

//   // Optional: Add logic here to save user to MongoDB if needed
//   callbacks: {
//     async session({ session }) {
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };
