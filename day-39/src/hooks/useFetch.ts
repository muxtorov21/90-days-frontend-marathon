import { useCallback, useEffect, useState } from 'react'

interface AdviceData {
	slip: {
		id: number
		advice: string
	}
}

export const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<T | null>(null)

	const fetchData = useCallback(async () => {
		setLoading(true)
		try {
			const response = await fetch(url)
			if (!response.ok) throw new Error('Xatolik yuz berdi')
			const result = await response.json()
			setData(result)
		} catch (err: any) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}, [url])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return { data, loading, error, refetch: fetchData }
}
