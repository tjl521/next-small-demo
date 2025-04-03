let chatList = []

export const GET = (req, res) => {
    return res.status(200).json({ status: 'success', chatList: JSON.stringify(chatList) })
}

export const POST = (req, res) => {
    const body = req.body
    chatList.push(body)
    return res.status(200).json({ status: 'success', chatList })
}

export default (req, res) => {
    if (req.method === "POST") {
        return POST(req, res)
    }
    return GET(req, res)
  }