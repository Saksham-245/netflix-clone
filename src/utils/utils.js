export const isMobileUserAgent = (userAgent) => {
	return /iPhone|iPad|iPod|Android/i.test(userAgent);
};
