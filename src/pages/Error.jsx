
// const Error = () => {
//   const showError = true;

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       {showError ? (
//         <div className="text-center">
//           <h1 className="text-red-500 text-4xl font-bold mb-4">
//             404 - Not Found
//           </h1>
//           <p className="text-gray-800 mb-8">
//             Oops! The page you are looking for does not exist.
//           </p>
//           <div className="w-16 h-16 bg-red-500 rounded-full animate-bounce"></div>
//         </div>
//       ) : (
//         <div>
//           {/* Your regular content goes here */}
//           <h1 className="text-2xl font-bold mb-4">Hello, this is your main content.</h1>
//           <p className="text-gray-800">You can add more content here.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Error;

// Error.js



const Error = () => {
  const showError = true;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {showError ? (
        <div className="text-center">
          <h1 className="text-red-500 text-4xl font-bold mb-4">
            404 - Not Found
          </h1>
          <p className="text-gray-800 mb-8">
            Oops! The page you are looking for does not exist.
          </p>
          <img
            src="data:image/jpeg;base64,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" // Replace with your actual error image path
            alt="Error Illustration"
            className="w-32 h-32 mb-4 mx-auto"
          />
          <div className="w-16 h-16 bg-red-500 rounded-full animate-bounce"></div>
        </div>
      ) : (
        <div>
          {/* Your regular content goes here */}
          <h1 className="text-2xl font-bold mb-4">Hello, this is your main content.</h1>
          <p className="text-gray-800">You can add more content here.</p>
        </div>
      )}
    </div>
  );
};

export default Error;

