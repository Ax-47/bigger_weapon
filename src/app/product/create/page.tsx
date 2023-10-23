import Image from 'next/image'

export default function Home() {
  return (
    <main>
        <form action="" method="post" encType='multi-part/form-data'>
            <input type="text" name="name" id="name" placeholder='name'/>
            <input type="number" name="stock" id="stock" placeholder='stock'/>
            <input type="number" name="price" id="price" placeholder='price'/>
            <input type="file" name="image" id="image" placeholder='image'/>
            <input type="submit" value="create" />
        </form>
    </main>
  )
}
