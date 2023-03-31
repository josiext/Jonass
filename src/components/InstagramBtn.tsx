import { INSTAGRAM_LINK } from "../configs";

export const InstagramBtn = () => {
  return (
    <a href={INSTAGRAM_LINK || "#contact-container"}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.3488 24H8.65116C2.58977 24 0 21.4102 0 15.3488V8.65116C0 2.58977 2.58977 0 8.65116 0H15.3488C21.4102 0 24 2.58977 24 8.65116V15.3488C24 21.4102 21.4102 24 15.3488 24ZM8.65116 1.67442C3.50512 1.67442 1.67442 3.50512 1.67442 8.65116V15.3488C1.67442 20.4949 3.50512 22.3256 8.65116 22.3256H15.3488C20.4949 22.3256 22.3256 20.4949 22.3256 15.3488V8.65116C22.3256 3.50512 20.4949 1.67442 15.3488 1.67442H8.65116Z" />
        <path d="M12 16.7442C9.38789 16.7442 7.2558 14.6121 7.2558 12C7.2558 9.38792 9.38789 7.25583 12 7.25583C14.6121 7.25583 16.7442 9.38792 16.7442 12C16.7442 14.6121 14.6121 16.7442 12 16.7442ZM12 8.93025C10.3032 8.93025 8.93022 10.3033 8.93022 12C8.93022 13.6968 10.3032 15.0698 12 15.0698C13.6967 15.0698 15.0698 13.6968 15.0698 12C15.0698 10.3033 13.6967 8.93025 12 8.93025Z" />
        <path d="M17.5814 6.97664C17.4363 6.97664 17.2911 6.94316 17.1572 6.88734C17.0232 6.83153 16.9004 6.75339 16.7888 6.65292C16.6883 6.5413 16.599 6.4185 16.5432 6.28455C16.4874 6.1506 16.4651 6.00548 16.4651 5.86037C16.4651 5.71525 16.4874 5.57013 16.5432 5.43618C16.6102 5.29106 16.6883 5.17944 16.7888 5.06781C16.8446 5.02316 16.9004 4.96734 16.9563 4.93385C17.0232 4.8892 17.0902 4.85571 17.1572 4.83339C17.2242 4.7999 17.2911 4.77757 17.3693 4.76641C17.7265 4.68827 18.106 4.81106 18.3739 5.06781C18.4744 5.17944 18.5525 5.29106 18.6083 5.43618C18.6642 5.57013 18.6976 5.71525 18.6976 5.86037C18.6976 6.00548 18.6642 6.1506 18.6083 6.28455C18.5525 6.4185 18.4744 6.5413 18.3739 6.65292C18.2623 6.75339 18.1395 6.83153 18.0056 6.88734C17.8716 6.94316 17.7265 6.97664 17.5814 6.97664Z" />
      </svg>
    </a>
  );
};
