import { useEffect, useState } from 'react'

export const useFetch = url => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchData = async () => {
		setLoading(true)
		try {
			const res = await fetch(url)
			const json = await res.json()
			setData(json)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [url])

	return { data, loading, error, refetch: fetchData }
}
