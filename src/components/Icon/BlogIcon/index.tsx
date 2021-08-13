import React from 'react';

const BlogIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.624 22.624"
      {...props}
    >
      <path
        d="M11.312,6.551c-1.646,0-3.18,0.498-4.45,1.347c0,0,0-5.685,0-5.919C6.862,0.886,6.1,0,5.008,0
		    C3.915,0,3.277,0.886,3.277,1.979v12.608c0,4.438,3.597,8.037,8.035,8.037c4.435,0,8.036-3.599,8.036-8.037
		    C19.347,10.15,15.747,6.551,11.312,6.551z M11.312,19.038c-2.458,0-4.45-1.993-4.45-4.451s1.992-4.45,4.45-4.45
		    c2.459,0,4.451,1.992,4.451,4.45S13.771,19.038,11.312,19.038z"
      />
    </svg>
  );
};

export default BlogIcon;