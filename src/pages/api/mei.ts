export default async function handler(_: any, res: any) {
    console.log('Mei number')
    await res.json({ mei: '43635098000166' })
}