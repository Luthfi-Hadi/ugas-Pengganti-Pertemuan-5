// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// menampung data orders
let orders = [];

// menambahkan pesanan
function addOrder(customerName, items) {
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0); // Menghitung total harga
    const newOrder = {
        id: generateUniqueId(),
        customerName,
        items,
        totalPrice,
        status: 'Menunggu' 
    };
    orders.push(newOrder);
}

// memperbarui status pesanan
function updateOrderStatus(orderId, status) {
    const order = orders.find(o => o.id === orderId); // Mencari pesanan berdasarkan ID
    if (order) {
        order.status = status; // Memperbarui status pesanan
    }
}

// menghitung total pendapatan dari pesanan yang berstatus Selesai
function calculateTotalRevenue() {
    return orders
        .filter(order => order.status === 'Selesai') // Memfilter pesanan yang sudah selesai
        .reduce((sum, order) => sum + order.totalPrice, 0); // Menghitung total pendapatan
}

// menghapus pesanan berdasarkan ID
function deleteOrder(id) {
    orders = orders.filter(order => order.id !== id); // Menghapus pesanan dari array orders
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };