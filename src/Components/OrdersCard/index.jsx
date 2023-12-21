import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    const currentDate = () => {
        const date = new Date().toLocaleDateString();
        return date

    }
    return(
        <div className='flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light flex items-center mb-2'><CalendarDaysIcon className="h-6 w-6" style={{ marginRight: '8px' }} />{currentDate()}</span>
                    <span className='font-light flex items-center'><ShoppingCartIcon className="h-6 w-6" style={{ marginRight: '8px' }} />{totalProducts} articles</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </p>
            </div>
        </div>
    )
}

export default OrdersCard