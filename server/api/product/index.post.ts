// server/api/products/index.post.ts
import { useDrizzle } from '~/server/utils/drizzle';
import { products } from '~/src/db/schema';
import { z } from 'zod';

export default defineEventHandler(async (event) => {
  try {
    //await requireAuth(event);
    const db = useDrizzle();

    const bodySchema = z.object({
      name: z.string().max(255),
      category: z.enum(['planta', 'arbusto', 'plantin', 'otro', 'semilla', 'herramienta']),
      description: z.string().max(500).optional(),
      price: z.number().min(1),
      stock: z.number().int().min(1),
      pot_size: z.enum(['Sin especificar','pequeña', 'mediana', 'grande','3 Lts','4 Lts','7 Lts','10 Lts']).optional(),
      image_url: z.string().nullable().optional(),
    });

    const body = await readBody(event);
    const validated = bodySchema.parse(body);

    const [product] = await db
      .insert(products)
      .values({
        name: validated.name,
        category: validated.category,
        description: validated.description || null, // Asegurarse de que sea null si no se proporciona
        price: Number(validated.price).toFixed(2), // Convertir a string con 2 decimales
        stock: validated.stock,
        pot_size: validated.pot_size,
        image_url: validated.image_url,
      })
      ;

    return { 
      success: true, 
      data: { message: 'Producto creado', product } 
    };
  } catch (error) {
    console.error('Error in /api/product POST:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : String(error) 
    };
  }
});