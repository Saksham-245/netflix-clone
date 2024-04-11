'use client';

import { useEffect } from 'react';

function useDocumentTitle(title) {
	useEffect(() => {
		const prevTitle = document.title;
		document.title = title;

		return () => {
			document.title = prevTitle; // Revert to the previous title on cleanup
		};
	}, [title]);
}

export default useDocumentTitle;